FROM golang:1.20-alpine3.18
RUN apk update && apk add --no-cache gcc make musl musl-dev yarn git python3 py3-pip
