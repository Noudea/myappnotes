const URL = "https://api.myidea.fr/v1/"

export function getNotes () 
{
    return new Promise((resolve,reject) => {
        fetch(URL+'notes')
            .then((response) => response.json())
            .then(result => {
                console.log('Response API getNotes',result)
                resolve(result)
            })
            .catch(error => window.alert(error))

    })
}

export function createNote(note)
{


    return new Promise((resolve,reject) => {
        if (note.title && note.description) {
            var body = {
                title: note.title,
                description: note.description
            }

            var params = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                mode: 'cors',
                cache: 'default',
                body: JSON.stringify(body)
            };

            fetch(URL + 'notes', params)
                .then(response => console.log(response),resolve())
                .catch(error => console.error(error))
        } else {
            reject('information manquante')
        }
    })
}
/**
 * 
 * @param {string} noteId l'id de la note
 */
export function deleteNote (noteId)
{
    return new Promise((resolve, reject) => {

        var params = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            mode: 'cors',
            cache: 'default',
        };


        fetch(URL + 'notes' + '/' + noteId,params)
            .then((response) => console.log(response))  
            .catch(error => window.alert(error))

    })
}