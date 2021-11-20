# CONFIG
WORKSPACE="saber2pr";
NAME="next-ssr-blog";
PORT=80;

# VERSION
DATE=$(date +%Y%m%d%H%M%S);
VERSION=$DATE;

# BRANCH
default_test_branch="master";
test_branch=${1:-$default_test_branch};

cd /home/${WORKSPACE}/${NAME};
git checkout $test_branch;
git pull origin $test_branch;
docker image build -t ${NAME}:$VERSION . \
&& docker stop ${NAME} \
&& docker rm ${NAME} \
&& docker run --restart=always --name=${NAME} -d -e NODE_ENV=production -p ${PORT}:${PORT} ${NAME}:${VERSION};