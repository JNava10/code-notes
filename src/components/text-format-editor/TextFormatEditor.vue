<script setup lang="ts">
import EditorButton from './EditorButton.vue';


</script>

<template>
   <div class=" h-full min-w-full min-h-full">
    <textarea
        class="
            min-w-full
            min-h-full
            p-5
            text-sm 
            font-[FiraCode]

            outline-none
            resize-none
            border-2
            border-indigo-700
            border-solid 
            focus:border-indigo-500
            transition-all
            rounded-md
        "
        id="textArea" placeholder="tbl_1&#10;tbl_2&#10;tbl_3&#10;..."
        ></textarea>
   </div>

    <div class="flex backdrop-blur-md rounded-md fixed bottom-1/10 m-0 -translate-x-1/2 -translate-y-1/2 left-1/2 gap-6 bg-indigo-950/80 p-3">
        
             <EditorButton onclick="addQuotes(true)"> <i class="fa-solid fa-single-quote-right"></i></EditorButton>
            <EditorButton><i class="fa-solid fa-quote-right"></i></EditorButton> 
            <EditorButton>a</EditorButton>
            <EditorButton onclick="removeQuotes()">Quitar Comillas</EditorButton>
            <EditorButton onclick="addCommas()"><i class="fa-solid fa-list"></i></EditorButton>
            <EditorButton onclick="clearText()"><i class="fa-solid fa-trash-can"></i></EditorButton>
            <EditorButton onclick="cleanFormat()"><i class="fa-solid fa-text-slash"></i></EditorButton>
            <EditorButton onclick="invertCasing()"><i class="fa-solid fa-a"></i></EditorButton>
    </div>
</template>