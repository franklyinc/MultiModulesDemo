# MultiModulesDemo
Demo of multiple modules per repo.

# Setup
- Create your modules as usual, however place them each in individual directories with their own package.json . 
- Create a package.json at the top level containing a list of all the directories that contain modules:


``` 
{ 
  "modules": ["mod1", "mod2"]
}
```
