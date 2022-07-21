"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[122],{15389:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>s});var i=t(87462),a=t(63366),o=(t(67294),t(3905)),r=["components"],d={id:"configuration",title:"Configuring Metro"},l=void 0,m={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuring Metro",description:"A Metro config can be created in these three ways (ordered by priority):",source:"@site/../docs/Configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/metro/docs/configuration",editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/Configuration.md",tags:[],version:"current",lastUpdatedAt:1658414253,formattedLastUpdatedAt:"7/21/2022",frontMatter:{id:"configuration",title:"Configuring Metro"},sidebar:"docs",previous:{title:"API",permalink:"/metro/docs/api"},next:{title:"Metro CLI Options",permalink:"/metro/docs/cli"}},s=[{value:"Configuration Structure",id:"configuration-structure",children:[{value:"General Options",id:"general-options",children:[]},{value:"Resolver Options",id:"resolver-options",children:[]},{value:"Transformer Options",id:"transformer-options",children:[]},{value:"Serializer Options",id:"serializer-options",children:[]},{value:"Server Options",id:"server-options",children:[]},{value:"Watcher Options",id:"watcher-options",children:[]}]},{value:"Merging Configurations",id:"merging-configurations",children:[]}],p={toc:s};function h(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.mdx)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"A Metro config can be created in these three ways (ordered by priority):"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"metro.config.js")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"metro.config.json")),(0,o.mdx)("li",{parentName:"ol"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"metro")," field in ",(0,o.mdx)("inlineCode",{parentName:"li"},"package.json"))),(0,o.mdx)("p",null,"You can also give a custom file to the configuration by specifying ",(0,o.mdx)("inlineCode",{parentName:"p"},"--config <path/to/config>")," when calling the CLI."),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"When Metro is started via the React Native CLI, some defaults are different from those mentioned below.\nSee the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/packages/cli-plugin-metro/src/tools/loadMetroConfig.ts"},"React Native repository")," for details."))),(0,o.mdx)("h2",{id:"configuration-structure"},"Configuration Structure"),(0,o.mdx)("p",null,"The configuration is based on ",(0,o.mdx)("a",{parentName:"p",href:"/metro/docs/concepts"},"our concepts"),", which means that for every module we have a separate config option. A common configuration structure in Metro looks like this:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  /* general options */\n\n  resolver: {\n    /* resolver options */\n  },\n  transformer: {\n    /* transformer options */\n  },\n  serializer: {\n    /* serializer options */\n  },\n  server: {\n    /* server options */\n  },\n  watcher: {\n    /* watcher options */\n    watchman: {\n      /* Watchman-specific options */\n    }\n  }\n};\n")),(0,o.mdx)("h3",{id:"general-options"},"General Options"),(0,o.mdx)("h4",{id:"cachestores"},(0,o.mdx)("inlineCode",{parentName:"h4"},"cacheStores")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Array<CacheStore<TransformResult<>>>")),(0,o.mdx)("p",null,"List where we store our ",(0,o.mdx)("a",{parentName:"p",href:"/metro/docs/caching"},"caches"),"."),(0,o.mdx)("h4",{id:"cacheversion"},(0,o.mdx)("inlineCode",{parentName:"h4"},"cacheVersion")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"string")),(0,o.mdx)("p",null,"Can be used to generate a key that will invalidate the whole metro cache."),(0,o.mdx)("h4",{id:"projectroot"},(0,o.mdx)("inlineCode",{parentName:"h4"},"projectRoot")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"string")),(0,o.mdx)("p",null,"The root folder of your project."),(0,o.mdx)("h4",{id:"watchfolders"},(0,o.mdx)("inlineCode",{parentName:"h4"},"watchFolders")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Array<string>")),(0,o.mdx)("p",null,"Specify any additional (to projectRoot) watch folders, this is used to know which files to watch.\n(By default the file watching is disabled in CI environments. Also it can be manually disabled by setting the env variable ",(0,o.mdx)("inlineCode",{parentName:"p"},"CI=true"),")"),(0,o.mdx)("h4",{id:"transformerpath"},(0,o.mdx)("inlineCode",{parentName:"h4"},"transformerPath")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"string")),(0,o.mdx)("p",null,"The absolute path of a module (or a package name resolvable from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"metro")," package) exporting a ",(0,o.mdx)("inlineCode",{parentName:"p"},"transform")," function."),(0,o.mdx)("h4",{id:"reporter"},(0,o.mdx)("inlineCode",{parentName:"h4"},"reporter")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"{update: () => void}")),(0,o.mdx)("p",null,"Used to report the status of the bundler during the bundling process."),(0,o.mdx)("h4",{id:"resetcache"},(0,o.mdx)("inlineCode",{parentName:"h4"},"resetCache")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,o.mdx)("p",null,"Whether we should reset the cache when starting the build."),(0,o.mdx)("h4",{id:"stickyworkers"},(0,o.mdx)("inlineCode",{parentName:"h4"},"stickyWorkers")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,o.mdx)("p",null,"Control whether the created workers should stick based on filename or not."),(0,o.mdx)("h4",{id:"maxworkers"},(0,o.mdx)("inlineCode",{parentName:"h4"},"maxWorkers")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"number")),(0,o.mdx)("p",null,"The number of workers we should parallelize the transformer on."),(0,o.mdx)("h4",{id:"filemapcachedirectory"},(0,o.mdx)("inlineCode",{parentName:"h4"},"fileMapCacheDirectory")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"string")),(0,o.mdx)("p",null,"The path to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"metro-file-map")," cache directory, defaults to ",(0,o.mdx)("inlineCode",{parentName:"p"},"os.tmpdir()"),"."),(0,o.mdx)("h4",{id:"deprecated-hastemapcachedirectory"},"Deprecated: ",(0,o.mdx)("inlineCode",{parentName:"h4"},"hasteMapCacheDirectory")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"string")),(0,o.mdx)("p",null,"Alias of ",(0,o.mdx)("inlineCode",{parentName:"p"},"fileMapCacheDirectory")),(0,o.mdx)("hr",null),(0,o.mdx)("h3",{id:"resolver-options"},"Resolver Options"),(0,o.mdx)("h4",{id:"assetexts"},(0,o.mdx)("inlineCode",{parentName:"h4"},"assetExts")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Array<string>")),(0,o.mdx)("p",null,"An array of asset extensions to include in the bundle. For example, if you would give ",(0,o.mdx)("inlineCode",{parentName:"p"},"['ttf']")," you would be able to include ",(0,o.mdx)("inlineCode",{parentName:"p"},".ttf")," files in the bundle."),(0,o.mdx)("h4",{id:"sourceexts"},(0,o.mdx)("inlineCode",{parentName:"h4"},"sourceExts")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Array<string>")),(0,o.mdx)("p",null,"An array of source extensions to include in the bundle. For example, if you would give ",(0,o.mdx)("inlineCode",{parentName:"p"},"['ts']")," you would be able to include ",(0,o.mdx)("inlineCode",{parentName:"p"},".ts")," files in the bundle."),(0,o.mdx)("h4",{id:"resolvermainfields"},(0,o.mdx)("inlineCode",{parentName:"h4"},"resolverMainFields")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Array<string>")),(0,o.mdx)("p",null,"Specify the fields in package.json files that will be used by the module resolver to do redirections when requiring certain packages. The default is ",(0,o.mdx)("inlineCode",{parentName:"p"},"['browser', 'main']"),", so the resolver will use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"browser")," field if it exists and ",(0,o.mdx)("inlineCode",{parentName:"p"},"main")," otherwise."),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"When Metro is started via the React Native CLI this will default to ",(0,o.mdx)("inlineCode",{parentName:"p"},"['react-native', 'browser', 'main']"),"."))),(0,o.mdx)("h4",{id:"disablehierarchicallookup"},(0,o.mdx)("inlineCode",{parentName:"h4"},"disableHierarchicalLookup")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,o.mdx)("p",null,"Whether to disable ",(0,o.mdx)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders"},"looking up modules in ",(0,o.mdx)("inlineCode",{parentName:"a"},"node_modules")," folders"),". This only affects the default search through the directory tree, not other Metro options like ",(0,o.mdx)("inlineCode",{parentName:"p"},"extraNodeModules")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"nodeModulesPaths"),". Defaults to ",(0,o.mdx)("inlineCode",{parentName:"p"},"false"),"."),(0,o.mdx)("h4",{id:"emptymodulepath"},(0,o.mdx)("inlineCode",{parentName:"h4"},"emptyModulePath")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"string")),(0,o.mdx)("p",null,'What module to use as the canonical "empty" module when one is needed. Defaults to using the one included in ',(0,o.mdx)("inlineCode",{parentName:"p"},"metro-runtime"),". You only need to change this if Metro is installed outside of your project."),(0,o.mdx)("h4",{id:"extranodemodules"},(0,o.mdx)("inlineCode",{parentName:"h4"},"extraNodeModules")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"{[name:string]:string}")),(0,o.mdx)("p",null,"Which other ",(0,o.mdx)("inlineCode",{parentName:"p"},"node_modules")," to include besides the ones relative to the project directory. This is keyed by dependency name."),(0,o.mdx)("h4",{id:"nodemodulespaths"},(0,o.mdx)("inlineCode",{parentName:"h4"},"nodeModulesPaths")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Array<string>")),(0,o.mdx)("p",null,"This option can be used to add additional ",(0,o.mdx)("inlineCode",{parentName:"p"},"node_modules")," folders for Metro to locate third-party dependencies when resolving modules. This is useful if third-party dependencies are installed in a different location outside of the direct path of source files."),(0,o.mdx)("p",null,"This option works similarly to how ",(0,o.mdx)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders"},"$NODE_PATH")," works for Node.js based tooling, except that ",(0,o.mdx)("inlineCode",{parentName:"p"},"nodeModulesPaths")," takes precedence over hierarchical ",(0,o.mdx)("inlineCode",{parentName:"p"},"node_modules")," lookup."),(0,o.mdx)("h4",{id:"resolverequest"},(0,o.mdx)("inlineCode",{parentName:"h4"},"resolveRequest")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"?CustomResolver")),(0,o.mdx)("p",null,"An optional function used to resolve requests. Particularly useful for cases where aliases or custom protocols are used. For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"resolveRequest: (context, moduleName, platform) => {\n  if (moduleName.startsWith('my-custom-resolver:')) {\n    // Resolve file path logic...\n    // NOTE: Throw an error if there is no resolution.\n    return {\n      filePath: \"path/to/file\",\n      type: 'sourceFile',\n    };\n  }\n  // Optionally, chain to the standard Metro resolver.\n  return context.resolveRequest(context, moduleName, platform);\n}\n")),(0,o.mdx)("h4",{id:"usewatchman"},(0,o.mdx)("inlineCode",{parentName:"h4"},"useWatchman")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,o.mdx)("p",null,"If set to ",(0,o.mdx)("inlineCode",{parentName:"p"},"false"),", it'll prevent Metro from using watchman (even if it's installed)"),(0,o.mdx)("p",null,"These options are only useful with React Native projects."),(0,o.mdx)("h4",{id:"blocklist"},(0,o.mdx)("inlineCode",{parentName:"h4"},"blockList")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"RegExp")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"Array<RegExp>")),(0,o.mdx)("p",null,"A RegEx defining which paths to ignore, however if a blocklisted file is required it will be brought into the dependency graph."),(0,o.mdx)("h4",{id:"hasteimplmodulepath"},(0,o.mdx)("inlineCode",{parentName:"h4"},"hasteImplModulePath")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"string")),(0,o.mdx)("p",null,"The path to the haste resolver."),(0,o.mdx)("h4",{id:"platforms"},(0,o.mdx)("inlineCode",{parentName:"h4"},"platforms")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Array<string>")),(0,o.mdx)("p",null,'Additional platforms to look out for, For example, if you want to add a "custom" platform, and use modules ending in .custom.js, you would return ',"['custom']"," here."),(0,o.mdx)("h4",{id:"requirecycleignorepatterns"},(0,o.mdx)("inlineCode",{parentName:"h4"},"requireCycleIgnorePatterns")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Array<RegExp>")),(0,o.mdx)("p",null,"In development mode, suppress require cycle warnings for any cycle involving a module that matches any of these expressions. This is useful for third-party code and first-party expected cycles."),(0,o.mdx)("p",null,"Note that if you specify your own value for this config option it will replace (not concatenate with) Metro's default."),(0,o.mdx)("p",null,"Defaults to ",(0,o.mdx)("inlineCode",{parentName:"p"},"[/(^|\\/|\\\\)node_modules($|\\/|\\\\)/]"),"."),(0,o.mdx)("hr",null),(0,o.mdx)("h3",{id:"transformer-options"},"Transformer Options"),(0,o.mdx)("h4",{id:"asyncrequiremodulepath"},(0,o.mdx)("inlineCode",{parentName:"h4"},"asyncRequireModulePath")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"string")),(0,o.mdx)("p",null,"What module to use for handling async requires."),(0,o.mdx)("h4",{id:"babeltransformerpath"},(0,o.mdx)("inlineCode",{parentName:"h4"},"babelTransformerPath")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"string")),(0,o.mdx)("p",null,"Use a custom babel transformer (only relevant when using the default transformerPath). For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// in your babelTransformer file\nmodule.exports = ({ filename, options, plugins, src }) => {\n  // transform file...\n  return { ast: AST };\n}\n")),(0,o.mdx)("h4",{id:"dynamicdepsinpackages"},(0,o.mdx)("inlineCode",{parentName:"h4"},"dynamicDepsInPackages")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"string")," (",(0,o.mdx)("inlineCode",{parentName:"p"},"throwAtRuntime")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"reject"),")"),(0,o.mdx)("p",null,"What should happen when a dynamic dependency is found."),(0,o.mdx)("h4",{id:"enablebabelrclookup"},(0,o.mdx)("inlineCode",{parentName:"h4"},"enableBabelRCLookup")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"boolean")," (default: ",(0,o.mdx)("inlineCode",{parentName:"p"},"true"),")"),(0,o.mdx)("p",null,"Whether we should use the ",(0,o.mdx)("inlineCode",{parentName:"p"},".babelrc")," config file."),(0,o.mdx)("h4",{id:"enablebabelruntime"},(0,o.mdx)("inlineCode",{parentName:"h4"},"enableBabelRuntime")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"boolean | string")," (default: ",(0,o.mdx)("inlineCode",{parentName:"p"},"true"),")"),(0,o.mdx)("p",null,"Whether the transformer should use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@babel/transform/runtime")," plugin."),(0,o.mdx)("p",null,"If the value is a string, it is treated as a runtime version number and passed as ",(0,o.mdx)("inlineCode",{parentName:"p"},"version")," to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime")," configuration. This allows you to optimize the generated babel runtime based on the\nruntime in the app's node modules confugration."),(0,o.mdx)("h4",{id:"gettransformoptions"},(0,o.mdx)("inlineCode",{parentName:"h4"},"getTransformOptions")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"GetTransformOptions")),(0,o.mdx)("p",null,"Get the transform options."),(0,o.mdx)("h4",{id:"hermesparser"},(0,o.mdx)("inlineCode",{parentName:"h4"},"hermesParser")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"boolean")," (default: ",(0,o.mdx)("inlineCode",{parentName:"p"},"false"),")"),(0,o.mdx)("p",null,"Use the hermes-parser package to use call Hermes parser via WASM instead of the Babel parser."),(0,o.mdx)("h4",{id:"minifierpath"},(0,o.mdx)("inlineCode",{parentName:"h4"},"minifierPath")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"string")),(0,o.mdx)("p",null,"Path to the minifier that minifies the code after transformation."),(0,o.mdx)("h4",{id:"minifierconfig"},(0,o.mdx)("inlineCode",{parentName:"h4"},"minifierConfig")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"{[key: string]: mixed}")),(0,o.mdx)("p",null,"Configuration object that will be passed to the minifier (it should be serializable)."),(0,o.mdx)("h4",{id:"optimizationsizelimit"},(0,o.mdx)("inlineCode",{parentName:"h4"},"optimizationSizeLimit")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"number")),(0,o.mdx)("p",null,"Define a threshold (in bytes) to disable some expensive optimizations for big files."),(0,o.mdx)("h4",{id:"react-native-only"},"React Native Only"),(0,o.mdx)("h4",{id:"assetplugins"},(0,o.mdx)("inlineCode",{parentName:"h4"},"assetPlugins")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Array<string>")),(0,o.mdx)("p",null,"List of modules to call to modify Asset data"),(0,o.mdx)("h4",{id:"assetregistrypath"},(0,o.mdx)("inlineCode",{parentName:"h4"},"assetRegistryPath")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"string")),(0,o.mdx)("p",null,"Where to fetch the assets from."),(0,o.mdx)("hr",null),(0,o.mdx)("h3",{id:"serializer-options"},"Serializer Options"),(0,o.mdx)("h4",{id:"getrunmodulestatement"},(0,o.mdx)("inlineCode",{parentName:"h4"},"getRunModuleStatement")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"(number")," ","|"," ",(0,o.mdx)("inlineCode",{parentName:"p"},"string) => string")),(0,o.mdx)("p",null,"Specify the format of the initial require statements that are appended at the end of the bundle. By default is ",(0,o.mdx)("inlineCode",{parentName:"p"},"__r(${moduleId});"),"."),(0,o.mdx)("h4",{id:"createmoduleidfactory"},(0,o.mdx)("inlineCode",{parentName:"h4"},"createModuleIdFactory")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"() => (path: string) => number")),(0,o.mdx)("p",null,"Used to generate the module id for ",(0,o.mdx)("inlineCode",{parentName:"p"},"require")," statements."),(0,o.mdx)("h4",{id:"getpolyfills"},(0,o.mdx)("inlineCode",{parentName:"h4"},"getPolyfills")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"({platform: ?string}) => $ReadOnlyArray<string>")),(0,o.mdx)("p",null,"An optional list of polyfills to include in the bundle. The list defaults to a set of common polyfills for Number, String, Array, Object..."),(0,o.mdx)("h4",{id:"postprocessbundlesourcemap"},(0,o.mdx)("inlineCode",{parentName:"h4"},"postProcessBundleSourcemap")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"PostProcessBundleSourcemap")),(0,o.mdx)("p",null,"An optional function that can modify the code and source map of the bundle before it is written. Applied once for the entire bundle."),(0,o.mdx)("h4",{id:"getmodulesrunbeforemainmodule"},(0,o.mdx)("inlineCode",{parentName:"h4"},"getModulesRunBeforeMainModule")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"(entryFilePath: string) => Array<string>")),(0,o.mdx)("p",null,"An array of modules to be required before the entry point. It should contain the absolute path of each module. Note that this will add the additional require statements only if the passed modules are already included as part of the bundle."),(0,o.mdx)("h4",{id:"processmodulefilter"},(0,o.mdx)("inlineCode",{parentName:"h4"},"processModuleFilter")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"(module: Array<Module>) => boolean")),(0,o.mdx)("p",null,"A filter function to discard specific modules from the output."),(0,o.mdx)("hr",null),(0,o.mdx)("h3",{id:"server-options"},"Server Options"),(0,o.mdx)("p",null,"These options are used when Metro serves the content."),(0,o.mdx)("h4",{id:"port"},(0,o.mdx)("inlineCode",{parentName:"h4"},"port")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"number")),(0,o.mdx)("p",null,"Which port to listen on."),(0,o.mdx)("h4",{id:"useglobalhotkey"},(0,o.mdx)("inlineCode",{parentName:"h4"},"useGlobalHotkey")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,o.mdx)("p",null,"Whether we should enable CMD+R hotkey for refreshing the bundle."),(0,o.mdx)("h4",{id:"enhancemiddleware"},(0,o.mdx)("inlineCode",{parentName:"h4"},"enhanceMiddleware")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"(Middleware, Server) => Middleware")),(0,o.mdx)("p",null,"The possibility to add custom middleware to the server response chain."),(0,o.mdx)("h4",{id:"rewriterequesturl"},(0,o.mdx)("inlineCode",{parentName:"h4"},"rewriteRequestUrl")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"string => string")),(0,o.mdx)("p",null,"A function that will be called every time Metro processes a URL. Metro will use the return value of this function as if it were the original URL provided by the client. This applies to all incoming HTTP requests (after any custom middleware), as well as bundle URLs in ",(0,o.mdx)("inlineCode",{parentName:"p"},"/symbolicate")," request payloads and within the hot reloading protocol."),(0,o.mdx)("h4",{id:"runinspectorproxy"},(0,o.mdx)("inlineCode",{parentName:"h4"},"runInspectorProxy")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"boolean")," (default: ",(0,o.mdx)("inlineCode",{parentName:"p"},"true"),")"),(0,o.mdx)("p",null,"Run Inspector Proxy server inside Metro to be able to inspect React Native code."),(0,o.mdx)("hr",null),(0,o.mdx)("h3",{id:"watcher-options"},"Watcher Options"),(0,o.mdx)("p",null,"Options for the filesystem watcher."),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Dot notation in this section indicates a nested configuration object, e.g. ",(0,o.mdx)("inlineCode",{parentName:"p"},"watchman.deferStates")," \u2192 ",(0,o.mdx)("inlineCode",{parentName:"p"},"watchman: { deferStates: ... }"),"."))),(0,o.mdx)("h4",{id:"watchmandeferstates"},(0,o.mdx)("inlineCode",{parentName:"h4"},"watchman.deferStates")),(0,o.mdx)("p",null,"Type: ",(0,o.mdx)("inlineCode",{parentName:"p"},"Array<string>")),(0,o.mdx)("p",null,"Applies when using Watchman. Metro will ",(0,o.mdx)("a",{parentName:"p",href:"https://facebook.github.io/watchman/docs/cmd/subscribe.html#defer"},"defer processing filesystem updates")," while these ",(0,o.mdx)("a",{parentName:"p",href:"https://facebook.github.io/watchman/docs/cmd/state-enter.html"},"states")," are asserted in the watch. This is useful for debouncing builds while the filesystem hasn't settled, e.g. during large source control operations."),(0,o.mdx)("p",null,"The default value is ",(0,o.mdx)("inlineCode",{parentName:"p"},"['hg.update']"),"."),(0,o.mdx)("h2",{id:"merging-configurations"},"Merging Configurations"),(0,o.mdx)("p",null,"Using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"metro-config")," package it is possible to merge multiple configurations together."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Method"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"mergeConfig(...configs): MergedConfig")),(0,o.mdx)("td",{parentName:"tr",align:null},"Returns the merged configuration of two or more configuration objects.")))),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Arrays and function based config parameters do not deeply merge and will instead override any pre-existing config parameters.\nThis allows overriding and removing default config parameters such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"platforms")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"getModulesRunBeforeMainModule")," that may not be required in your environment."))),(0,o.mdx)("h4",{id:"merging-example"},"Merging Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'// metro.config.js\nconst { mergeConfig } = require("metro-config");\n\nconst configA = {\n  /* general options */\n\n  resolver: {\n    /* resolver options */\n  },\n  transformer: {\n    /* transformer options */\n  },\n  serializer: {\n    /* serializer options */\n  },\n  server: {\n    /* server options */\n  }\n};\n\nconst configB = {\n  /* general options */\n\n  resolver: {\n    /* resolver options */\n  },\n  transformer: {\n    /* transformer options */\n  },\n  serializer: {\n    /* serializer options */\n  },\n  server: {\n    /* server options */\n  }\n};\n\nmodule.exports = mergeConfig(configA, configB);\n')))}h.isMDXComponent=!0}}]);