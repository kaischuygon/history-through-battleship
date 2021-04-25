# get heroku repository
git submodule update --init;

# move into node app repository
cd code/history-through-battleship;

# install dependencies
npm install;

# setup .env
read -p "Enter database URL (included in canvas submission): " databaseurl
echo "DATABASE_URL=$databaseurl" >> .env

echo "Do you want to: "
read -p "(1) Develop or (2) Run Locally: " action
while true; do
	case $action in 
		#case 1 
		"1") 	npm run devStart;
                heroku git:remote -a history-through-battleship;
				break ;;
		
		#case 2 
		"2") 	heroku local web;
				break ;;

		# Default
		*)		echo "Not valid, try again: " ;
				read action ;;
	esac 
done