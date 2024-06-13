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
  'MINGW'* | 'MSYS'* | 'CYGWIN'*)
    PIP_CMD="pip"
    PYTHON_CMD="python"
    ;;
  *)
    echo "Système d'exploitation non supporté"
    exit 1
    ;;
esac

# Launch local server
$PYTHON_CMD manage.py runserver