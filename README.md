# C# + Angular project skeleton

## Develop

Run in one console to start server on port 5000
```
dotnet watch run
```
And this in another to serve angular on port 4200
```
ng serve --proxy-config proxy.config.json
```
Now the project will update automatically on change! try http://localhost:4200/ 

## Production

```
ng build
dotnet run
```
Check http://localhost:5000/ !
