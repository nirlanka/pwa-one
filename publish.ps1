## Make sure you have installed surge
## from //surge.sh and run it once to
## log in.

ng build --prod; 
## --optimization=false
##   Disables uglification
##   for better errors.

cp ./surge/* ./dist/pwa-one/

cd ./dist/pwa-one; 
surge ./ pwa-one.surge.sh; 

cd ../..;