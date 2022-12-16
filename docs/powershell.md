
https://stackoverflow.com/questions/63423584/how-to-fix-error-nodemon-ps1-cannot-be-loaded-because-running-scripts-is-disabl


recommend using RemoteSigned as opposed to Unrestricted, and limiting the policy to the CurrentUser if possible.
```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
```
Get-ExecutionPolicy
# You should get 'Restricted'
```

```
Set-ExecutionPolicy Restricted -Scope CurrentUser
```