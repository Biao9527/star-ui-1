rm -rf doc &&
yarn doc &&
cd doc &&
git init &&
git add . &&
git commit -m "update" &&
git remote add origin git@github.com:Biao9527/star-ui-website.git &&
git push -f -u origin master &&
cd -