**Vue To Do List**
===
**Descrizione:**
Rifare l’esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- `text`, una stringa che indica il testo del todo
- `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no  
## **MILESTONE 1**
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.  
## **MILESTONE 2**
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.  
## **MILESTONE 3**
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

## Procedimenti  
 - Creare la parte grafica utilizzando il css e mettere i vari elementi

 - impostare il messaggio nel caso in cui non ci siano task 

 - creo in data l'array di oggetti tasks che poi sará ciclato sul tag li con un v-for e stampato in pagina per ogni task presente
 ```
 v-for="(task,i) in tasks"
 ```

 - creo una funzione che al click del cestino solo se la task é giá stata barrata mi rimuove la task e nel caso in cui deve ancora essere selezionata mi stampa in pagina un messaggio di avviso
 ```
 remove(i){
        if (this.tasks[i].done) {
          this.tasks.splice(i,1)
          this.error = '';
        }else{
          this.error = "Puoi eliminare il task solo se é giá stato barrato"
        }
      }
 ```
 - dentro input creo un v-model di "newTask" che inizialmente sará newTask: '  ',   per poi prendere il valore di ció che verrá scritto sul'input stesso,     al click del button aggiungi associo la funzione "add" che se la parola inserita é maggiore di 3 lettere mi pusha dentro 'tasks' un nuovo oggetto creato contenente come ''text'' il valore inserito tramite il v-model e come ''done'' false di default   
 altrimenti error sará uguale ad un messaggio di avviso
 ````
 add(){
        if (this.newTask.length >3) {
          const taskAdded = {
            text: this.newTask,
            done: false,
          };
          this.tasks.push(taskAdded);
          this.error = '';
        }else{
          this.error = "Scrivi qualcosa di senso compito"
        }
      }

 ```
 - aggiungo la funzione che al click del tasto ''enter'' sulla tastiera se ci si trova nell'area di input verrá aagiunto il testo ovvero la funzione add()
 ````
 @keyup.enter="add()"
 ```