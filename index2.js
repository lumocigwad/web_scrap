{\rtf1\ansi\ansicpg1252\deff0\nouicompat\deflang1033{\fonttbl{\f0\fnil\fcharset0 Calibri;}}
{\colortbl ;\red0\green0\blue255;}
{\*\generator Riched20 10.0.17134}\viewkind4\uc1 
\pard\sa200\sl276\slmult1\f0\fs22\lang9 const scrape = require('website-scraper');\par
\par
scrape(\{\par
    urls: [\par
        '{{\field{\*\fldinst{HYPERLINK https://nodejs.org/ }}{\fldrslt{https://nodejs.org/\ul0\cf0}}}}\f0\fs22 ', // Will be saved with default filename 'index.html'\par
        \{\par
            url: '{{\field{\*\fldinst{HYPERLINK http://nodejs.org/about }}{\fldrslt{http://nodejs.org/about\ul0\cf0}}}}\f0\fs22 ',\par
            filename: 'about.html'\par
        \},\par
        \{\par
            url: '{{\field{\*\fldinst{HYPERLINK http://blog.nodejs.org/ }}{\fldrslt{http://blog.nodejs.org/\ul0\cf0}}}}\f0\fs22 ',\par
            filename: 'blog.html'\par
        \}\par
    ],\par
    directory: './node-website',\par
    subdirectories: [\par
        \{\par
            directory: 'img',\par
            extensions: ['.jpg', '.png', '.svg']\par
        \},\par
        \{\par
            directory: 'js',\par
            extensions: ['.js']\par
        \},\par
        \{\par
            directory: 'css',\par
            extensions: ['.css']\par
        \},\par
        \{\par
            directory: 'fonts',\par
            extensions: ['.woff','.ttf']\par
        \}\par
    ],\par
    sources: [\par
        \{\par
            selector: 'img',\par
            attr: 'src'\par
        \},\par
        \{\par
            selector: 'link[rel="stylesheet"]',\par
            attr: 'href'\par
        \},\par
        \{\par
            selector: 'script',\par
            attr: 'src'\par
        \}\par
    ]\par
\}).then(function (result) \{\par
    // Outputs HTML \par
    // console.log(result);\par
    console.log("Content succesfully downloaded");\par
\}).catch(function (err) \{\par
    console.log(err);\par
\});\par
}
 