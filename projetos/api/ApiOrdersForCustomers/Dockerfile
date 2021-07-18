FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.sln ./aspnetapp/
COPY ./Core/Core.csproj ./aspnetapp/Core/
COPY ./Infra/Infra.csproj ./aspnetapp/Infra/
COPY ./Api/Api.csproj ./aspnetapp/Api/

WORKDIR /app/aspnetapp/
RUN dotnet restore

# copy everything else and build app
COPY . /app/aspnetapp/
WORKDIR /app/aspnetapp/Api/
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS runtime
WORKDIR /app

EXPOSE 5001
ENV ASPNETCORE_URLS=http://*:5001
ENV ConnectionStrings:ApiDB="Server=ordersdb.cal8kqhrdd4f.sa-east-1.rds.amazonaws.com; port=3306; database=orders; user=dbadmin; password=02c7f002-daaa-44ab-ade6-b64fafdc4308; Connect Timeout=5000"

COPY --from=build /app/aspnetapp/Api/out ./
ENTRYPOINT ["dotnet", "Api.dll"]