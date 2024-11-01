# React + TypeScript + Vite

Estructura de proyecto y directorios para proyectos React + Typescript en departamento de I+D. La estructura está basada en features, es decir, en las distintas funcionalidades que tiene la página.

Estructura de directorios:

src
|
+-- assets: El fichero assets contendrá todos los archivos estáticos como imágenes, fuentes, gifs, logos...
|
+-- config: Archivos referentes a configuración. Ej: index.js para conexión a Firebase.
|
+-- features: Fichero que contendrá cada feature, y dentro de ellas, sus componentes etc... Más sobre las features en la siguiente sección.
|
+-- hooks: Hooks comunes utilizados a lo largo de toda la aplicación.
|
+-- layout: Páginas y componentes utilizados a lo largo de toda la aplicación. Ej: Navbars, footers...
|
+-- providers: Contextos y providers utilizados en toda la aplicación. Ej: AuthProvider.
|
+-- routes: Ruteo de la aplicación.
|
+-- services: Carpeta para servicios.
|
+-- types: Diferentes tipos e interfaces de objetos comunes a toda la aplicación.
|
+-- utils: Clases de utilidad comunes.


Estructura de feature:

src/features/feature
|
+-- assets: Fichero de assets independiente para esa feature
|
+-- components: Componentes específicos de esa feature
|
+-- hooks: Hooks específicos utilizados solo en esta feature
|
+-- layout: Páginas y componentes que se utilizan a lo largo de toda la feature. Aquí se puede poner el componente principal que llama al resto de componentes de la feature. Luego, este componente es el que se exporta al resto de la aplicación.
|
+-- types: Tipos e interfaces específicas.
|
+-- utils: Clases de utilidad específicas.


