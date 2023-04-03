FROM golang:1.20-alpine AS builder

WORKDIR /opt

COPY main.go /opt

RUN go build main.go

FROM scratch

COPY --from=builder /opt/main /opt/main

ENTRYPOINT [ "/opt/main" ]
