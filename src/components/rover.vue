<template>
    <div >
        <form @submit.prevent class="container">
            <div class="labels"> 
                <div>
                    <label for="start" class="lbl">Starting Point </label>
                </div>
                <div>
                    <label for="plateausize" class="lbl">Plateau Size </label>
                </div>
                <div>
                    <label for="movelist" class="lbl">Move List </label>
                </div>
            </div>
            <div class="inp"> 
                <input v-model="startPoint" id="start"/>
                <input v-model="plateauSize" id="plateausize"/>
                <input v-model="moveList" id="movelist"/>
            </div>
            <div> 
            </div>
        </form>
        <div v-if="inputErrors.length > 0"> 
            <ul>
                <li v-for="error of inputErrors" :key="error">
                    {{error}}
                </li>
            </ul>
        </div>
        <div v-else>
            <div v-if="endPosition.error">
                {{endPosition.error}}<br/>
                The final location of the accident was: {{endPosition.lastLocation}}. <br/>
                The final move was: {{endPosition.numMoves}}<br/>
                the last thing the rover did was: {{endPosition.lastMove}}
            </div>
            <div v-else>
                The final location was: X={{endPosition.X}}, Y={{endPosition.Y}}, Direction={{endPosition.direction}}
            </div>
        </div>
     </div>
</template>
<script>
import Validators from '../services/validationService.js'
import Navigator from '../services/navigationService.js'

export default {
    data(){
        return {
            startPoint:"1 2 N",
            plateauSize:"5 5",
            moveList: "LMLMLMLMM"
        }
    },
    computed: {
        parsedStart(){
            return this.loadCoords(this.startPoint)
        },

        parsedGrid(){
            let splitPlat = this.plateauSize.split(" ")
            return {
                X: parseInt(splitPlat[0]),
                Y: parseInt(splitPlat[1])
            }
        },
        inputErrors(){
            let errors = []

            let parseErrors = this.ValidateStartInput(this.startPoint)
            errors.push(...parseErrors)
            parseErrors = this.ValidateGridInput(this.plateauSize)
            errors.push(...parseErrors)
            if(errors.length) {return errors}  // if they have input errors, tell them to fix input before continuing validation

            const startInputErrors=this.ValidateCoOrd(this.parsedStart,this.parsedGrid,"start")
            errors.push(...startInputErrors)
            const moveErrors=this.ValidateMoveset(this.moveList)
            errors.push(...moveErrors)
            return errors;
        },
        endPosition(){
            let startPos = {...this.parsedStart};
            return this.GetEndPoint(startPos,this.parsedGrid, this.moveList)
        }
    },
    methods: {
        ...Validators,
        ...Navigator,
        loadCoords(strInp){
            let splitInp = strInp.split(" ")
            return {
                X: parseInt(splitInp[0]),
                Y: parseInt(splitInp[1]),
                direction: splitInp[2]
            }
        }
    }
}
</script>
<style scoped>
.container{
    display: grid;
    grid-template-columns: 4fr 1fr 1fr 4fr;
    grid-template-rows: 1fr 1fr 1fr;
}
.labels{
    grid-column-start: 2;
    grid-column-end: 3;
}
.lbl{
    justify-self: end;
}
.inp{
    grid-column-start: 3;
    grid-column-end: 4;
}
</style>