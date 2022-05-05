mkdir -p ./src/proto
protoc -I=$DIR echo.proto \
--js_out=import_style=commonjs:./src \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src