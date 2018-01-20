# Project Title

(CTS)v1.0
Converting C# types to TypeScript Types.
Console Application.

## Getting Started

Just copy the project, add your DLL references, change App config, run 

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
            // Dictionary for Assemplies names with specific namespaces or without
            Dictionary<string, List<string>> AssemplyNames = new Dictionary<string, List<string>>();
            AssemplyNames.Add("TPCorp.TPApi.Clients", null);
            AssemplyNames.Add("Snow.Erp", null);
            AssemplyNames.Add("Snow.Erp.Api.Session", null);
            AssemplyNames.Add("Snow.Erp.Api", null);
            AssemplyNames.Add("Snow.Erp.System", null);
            AssemplyNames.Add("TPCorp.TPApi.Basis", null);
            AssemplyNames.Add("Snow.Erp.Api.SystemMgmt", null);
            AssemplyNames.Add("TPCorp.AppLib", new List<string> {
                "TPCorp.AppLib.FileReceivers",
                "TolsIT.TP.WebPrototypeLib.Api.DataTypes",
                "TolsIT.TP.WebPrototypeLib.Views"
            });
            AssemplyNames.Add("TPCorp.App.CoreDev", null);
            AssemplyNames.Add("TPCorp.TPApi.Ui", null);
            AssemplyNames.Add("Snow.Erp.Api.Basis", null);
            //Ignored List of TypedNames (as 'Value') with specific AssemplyNames in (as 'Key')
            Dictionary<string,List<string>> IgnoredTypeNames = new Dictionary<string,List<string>>();
            IgnoredTypeNames.Add("Snow.Erp.Api.Session", new List<string>() { "InstanceDetailsAux1" });
            IgnoredTypeNames.Add("TPCorp.App.CoreDev",new List<string>() { "IDevApiApp", "ApiCallCtx" });
            IgnoredTypeNames.Add("TPCorp.TPApi.Clients", new List<string>() { "Setup_CompanyEntity" });//exist with same name in TPCorp.AppLib.ts

            ConvertProcessBL ObjConvert = new ConvertProcessBL(AssemplyNames, "TPApp", IgnoredTypeNames);
            ObjConvert.Start();
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Microsoft.CSharp](https://msdn.microsoft.com/en-us/library/microsoft.csharp(v=vs.110).aspx) - The framework used


## Contributing

Please read [CONTRIBUTING.md](https://) for details on our code of conduct, and the process for submitting pull requests to me.

## Versioning



## Authors

* **Mahmoud Ahmed Abdelgawad** - *Initial work* - [CTS] https://github.com/mahmoudelgawad


## License

This project is free

## Acknowledgments

* Convert C# To TypeScript



