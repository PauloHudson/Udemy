//metodosIMportantes
const Pilots = ["Vettel","Alonso","Raikkonen"]

//o conteúdo é passível de mudança.
//porém não é possível adicionar contéudo já que é uma constante...


Pilots.pop() //Vai Retira o ùltimo índice.
Pilots.push("Bruna") //colocará elemento ná ultima posição do array.
//---------------------------------------------------------------------------------------------
Pilots.shift()//Remove o Primeiro Elemento da Lista....
Pilots.unshift() //colocará um elemento na Primeira posíção do array

//splice.
//splice(x, y, z)
//x inicio, y fim, z = colcoca valores
//caso não queira tirar ninguem é só colocarum zero no y


const NovosPilotos = Pilots.slice(2) //vai criar um novo array (apartir do indice 2.)

 