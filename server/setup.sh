OS="$(uname)"
case $OS in
  'Linux')
    PIP_CMD="pip"
    PYTHON_CMD="python"
    ;;
  'Darwin')
    PIP_CMD="pip3"
    PYTHON_CMD="python3"
    ;;
  *)
    echo "Système d'exploitation non supporté"
    exit 1
    ;;
esac

# Dependencies
$PIP_CMD install -r requirements.txt

# Migrations
$PYTHON_CMD manage.py makemigrations
$PYTHON_CMD manage.py migrate

# Scraping
# $PYTHON_CMD manage.py runscript api.scraping