
RewriteEngine on
RewriteCond %{SERVER_PORT} 80 
RewriteRule ^(.*)$ https://chuvali.github.io/oilgun/index.html/$1 [R,L]
