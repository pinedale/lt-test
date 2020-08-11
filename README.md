# SWAPI LEAN-TECH

Swapi LT es una aplicacion web que nos permite listar todos los personajes de StarWars

## Que hay que hacer?

Debe de construir una aplicacion que: 

* Consuma el API Swapi y por congiuiente visualizar en una lista el nombre de los personajes.

* Este servicio esta pagina por ende el sistema debe soportar:

	1. Ir a la pagina siguiente
	2. Ir a la pagina previa

> Nota: Tenga en cuenta que una vez usted cambie de pagina el sistema debe de mostrar los datos correspondientes al API

* El sistema debe mostrar la información de la página en la que estoy, sin importar que el navegador sea refrescado

* El sistema debe mostrar el nombre del usuario que seleccionó en la cabecera del proyecto.

## API

Swapi es un API publica dedicada a la muestra de personajes de Star Wars, el enpoint que usted debera consumir es:

`http://swapi.dev/api/people/?page=num-page`

De igual forma, para hacer lo mas agil posible este code interview en la estrutura de abajo se le muestra la respuesta del servicio.

`

	"count": 82,
	"next": "http://swapi.dev/api/people/?page=3",
	"previous": "http://swapi.dev/api/people/?page=1",
	"results": [
		{
			"name": "Anakin Skywalker",
			"height": "188",
			"mass": "84",
			"hair_color": "blond",
			"skin_color": "fair",
			"eye_color": "blue",
			"birth_year": "41.9BBY",
			"gender": "male",
			"homeworld": "http://swapi.dev/api/planets/1/",
			"films": [
				"http://swapi.dev/api/films/4/",
				"http://swapi.dev/api/films/5/",
				"http://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [
				"http://swapi.dev/api/vehicles/44/",
				"http://swapi.dev/api/vehicles/46/"
			],
			"starships": [
				"http://swapi.dev/api/starships/39/",
				"http://swapi.dev/api/starships/59/",
				"http://swapi.dev/api/starships/65/"
			],
			"created": "2014-12-10T16:20:44.310000Z",
			"edited": "2014-12-20T21:17:50.327000Z",
			"url": "http://swapi.dev/api/people/11/"
		},
	]
	. . .

`

Si tiene alguna duda adicional, puede visitar su sitio oficial [SWAPI API](https://swapi.dev/).
## Para tener en cuenta

Un code interview es un espacio de LT donde se evelua las habilidades del desarrollador. Por consiguiente sientase libre de usar las tecnologias que usted considere adecuadas (Context, hooks, redux, etc.. ) para solucionar este proyecto.


