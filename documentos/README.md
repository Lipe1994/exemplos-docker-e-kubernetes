## Indo mais afundo com azure kubernets

É necesário possuir azure kubernets servises

## kubectl

az account set --subscription [subscripion] -> para usar o kubectl na maquina local

az aks get-credentials --resource-group [group] --name [clusterAks] -> para usar o kubectl na maquina local

az aks get-credentials -n [nomeDoSeuCluster] -g [nomeDoResourseGroupDoSeuCluster] -> adicionar credenciais no az aks terminal para posteriormente ficarem disponiveis para o kubectl

kubectl config get-contexts -> lista os clusters configurados

kubectl get nodes -> ver status dos clusters

kubectl top nodes -> ver quais clusters estão usando mais memória

kubectl create -f frontend.yaml --dry-run=client -> testar yml
kubectl create -f frontend.yaml --> fazer deploy no azure kubernets
kubectl apply -f frontend.yaml --> fazer deploy no azure kubernets ou aplica mudanças

kubectl get deploy -> ver deploys

## azure cli 
    az login -> faz login no azure
    az acr login --name [nomeDoRegistre] - libera push no registre azure 

## kubernetes
    projeto de exemplo -> ...


az aks update --help

## redes
kubectl expose deployment [nomeDoDeployment] --port=80 --type=loadBalancer --target-port=3000 => cria um serviço do tipo loadBalancer  que recebe na porta 80 e entra na porta 3000 do deployment


kubectl get svc => lista serviços
kubectl edit svc [nomeDoServico] => edita serviço
kubectl delete svc [nomeDoServico]  => deleta o seviço









