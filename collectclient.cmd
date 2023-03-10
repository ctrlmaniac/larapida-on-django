rmdir /s /q webapp\client\templates\client
rmdir /s /q webapp\client\static\client

md webapp\client\templates\client
md webapp\client\static\client

copy client\dist\index.html webapp\client\templates\client\index.html
xcopy /e /i client\dist\static\client webapp\client\static\client