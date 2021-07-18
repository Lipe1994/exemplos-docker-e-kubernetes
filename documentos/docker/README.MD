# Docker

## Alguns comandos

docker pull [nomeDaImagem] -> baixa uma imagem base docker hub
docker run [nomeDaImagem] -> cria um container e executa a imagem
    -it -> parametro para o doker iniciar em modo interativo e disponibilizar uma shel, na qual você pode executar comandos dentro dele EX.: node:14.7 date
    -p -> parametro para fazer um redirecionamento entre o host e o hospedeiro EX.: -p 8080:8088
docker ps -a -> mostra processos/containers em execução
docker rm [nomeDoContainer] -> remove o container
docker image ls -> lista as imagens disponiveis
docker container ls -> lista os containers disponiveis

docker container commit [nomeDoContainer] -> gerar uma nova versão da imagem
docker build . -t [tagDaImagem] -> cria uma nova versão de uma imagem base seguindo orientações de um arquivo chamado Dockerfile

docker push [nomeDaImagem] -> envia imagem para o serviço de docker service
    docker push no azure requer um docker registry no azure(acr), e precisa da CLI do azure instalada e logada na conta azure com ACR. EX.: commands az login, az acr login (ambos seguidos com credenciais) 