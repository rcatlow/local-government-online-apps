﻿/*global define */
/*
 | ArcGIS Solutions
 | Version 10.2
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define(
({
        tooltips: {
            search: "Cerca",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "Posizione corrente",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Invia correzione",  // Command button to submit a correction to the app's host
            collect: "Aggiungi contenuto alla mappa",  // Command button to open a template picker to add features to the map
            filter: "Layer mappa di filtro",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Cambia mappa di base",  // Command button to open a dialog box for switching basemaps
            share: "Condividi",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Condividi tramite e-mail",  // Command button to share the current map extents via email
            shareViaFacebook: "Condividi tramite Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Condividi tramite Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Stampa mappa",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Visualizza mappa stampata",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Orientamento pagina orizzontale",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Orientamento pagina verticale",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Guida"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "e-mail",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter"  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
        },
        prompts: {
            search: "Cerca:",  // Appears before a search text field in dialog box for searching for a feature
            markup: "Disegna",  // Appears before a set of tools for drawing on the map
            mapLayers: "Layer mappa:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "Campi dei layer di ricerca:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Il sito non è autorizzato a ottenere la posizione corrente",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Il browser non è in grado di ottenere la posizione corrente",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Il browser non è in grado di ottenere la posizione corrente in modo puntuale",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Layer di ricerca non trovato nella mappa",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "Campo non trovato nel layer di ricerca della mappa"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
        }
    })
);
