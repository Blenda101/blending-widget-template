
# Theme for Widget

Theme is a component by which Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur unde soluta reprehenderit inventore pariatur earum consequatur autem amet quisquam! Voluptate asperiores enim distinctio velit. Sed omnis, deleniti commodi vitae consequuntur nam iusto possimus necessitatibus, quo officiis minima id tenetur odit. Sint quaerat molestias sed enim velit, consequuntur exercitationem voluptatibus.

## Technology Stack

[**EJS**](https://ejs.co/#docs)
EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. It is a simple template language or engine. EJS has its own defined syntax and tags. It offers an easier way to generate HTML dynamically.

We actually define HTML in the EJS syntax and specify how and where various data will go on the page. Then the template engine combines these data and runs programming logic to generate the final HTML page. So, the task of EJS is to take your data and insert it into the web page according to how you’ve defined the template and generate the final HTML.

We used this syntax to put placeholder variables and the value of these variables will be filled up by data from the widgets.

**[CSS](https://www.w3schools.com/css/)** 
CSS is the language we use to style the EJS document. CSS describes how those EJS elements should be displayed.

**[SASS](https://sass-lang.com/documentation/)**
CSS with superpowers. Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.

## Prerequisites
- **Nodejs**: version 16 or higher
- **Package Manager:** npm (already included along with nodejs) / yarn


# Get Started
To install all the dependencies

    npm install
Or,

    yarn install

## Development

To open the development server

    npm run dev
    
Or, 

    yarn dev

## Theme Markup

All the template markup code should be written in the **index.ejs** file located inside the root of the project directory. The markup must be wrapped with a body tag.

    <body>
	    <!-- Start writing your code from here -->
    </body>

To show dynamic data in the theme component

    <body>
	    <div>
		    <h3><%=  data.wikiTitle  %></h3>
		    <ul>
			    <% for(var i = 0; i < data.author.length; i++) {
			        <li><%= data.author[i] %></li>
			    <% } %>
			</ul>
		</div>
    </body>

To connect any event listener from the frontend

    <body>
	    <p><%=  data.description %></p>
	    <button onclick="followAuthor(<%= post.id %>)">Follow</button>
    </body>
## Theme Styling

In the root directory, there is a folder named **"styles"** under which **style.scss** is available. In that file, all the CSS or Sass code for styling needs to be placed

**index.ejs**

    <body>
   	    <h3 id="primaryTitle"><%=  data.wikiTitle  %></h3>
   	    <p class="description"><%=  data.description %></p>
    </body>
       
**style.css**

     body{
       background-color: red;
     }
     .description{
       color: violet;
     }
     #primaryTitle{
       font-size: 20px;
     }

## Adding Image

All the images should be stored in the **"assets"** folder and use relative paths when referencing them.

**Example-1**: If you want to show an image named **"background.png"** that is stored in a subdirectory called image

    <body>
   	    <p><%=  data.description %></p>
   	    <img
          src="image/background.png"
          alt=""
        />
    </body>
**Example-2**: If you want to show an image named **"profile.jpg"** which is directly stored inside **assets** folder

     <body>
   	    <p><%=  data.description %></p>
   	    <img
          src="profile.jpg"
          alt=""
        />
    </body>


# Configuration File
In the **config.json** file we need to write all the configuration settings in this file. 

**Example:**

    {
      "title": "RECIPE NAME",
      "description": "RECIPE_DESCRIPTION",
      "channel": "Wiki",
      "preview": ["Web", "Mobile"]
    }
| Options |  Description  | Value
|  title   --|
| description |  |


## Directory Architecture



## Build Project



# Publishing the Theme

