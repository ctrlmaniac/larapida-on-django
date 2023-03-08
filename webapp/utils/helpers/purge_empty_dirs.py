import os


def purge_empty_dirs(path, removeRoot=True):
    if not os.path.isdir(path):
        return

    # rimuove le sottocartelle vuote
    files = os.listdir(path)
    if len(files):
        for f in files:
            fullpath = os.path.join(path, f)
            if os.path.isdir(fullpath):
                purge_empty_dirs(fullpath)

    # se la cartella è vuota la rimuove
    files = os.listdir(path)
    if len(files) == 0 and removeRoot:
        # Rimuove le cartelle vuote
        os.rmdir(path)
