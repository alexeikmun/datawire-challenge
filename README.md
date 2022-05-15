# Datawire Challenge

## Before installing

- Install Docker on your local machine (<https://docs.docker.com/install/>).
- Install Kubernetes on your local machine (<https://kubernetes.io/docs/setup/>).
- Install minikube in your local machine (<https://kubernetes.io/docs/tutorials/kubernetes-for-developers/minikube/>).

## How to build and run

- Clone this repository in your machine
- cd into the directory
- Run `minikube start`
- And then run `minikube tunnel`
- Exec `kubctl apply -f k8s`
- (Optional) To see the pods status `kubectl get pods -w`
- Open your localhost in your browser `http://localhost` or your `minikube ip`

## Design choices

The project uses Docker/Kubernetes to deploy the application in a minikube cluster, both frontend and backend have a `LoadBalancer` service, and an `Ingress` resource which serves the frontend and backend in the same host. Basically, the frontend is a simple web page built in React, and the API built in Golang to serve a static json snapshot.

## Technologies used

### Frontend

- React 18.1
- React Bootstrap 5
- Styled components
- React Select
- Sass Compiler

### Backend

- GoLang
- Gin Framework

### Infrastructure

- Docker
- Kubernetes
- Minikube

![client](https://raw.githubusercontent.com/alexeikmun/datawire-challenge/main/imgs/client.png)
