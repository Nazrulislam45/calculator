

        // Result Box Declaration
        var resultDispay = document.getElementById('result');

        // Button Sent to Result Box
        function bttn(num){
            resultDispay.value =  resultDispay.value + num;
        }

        // Equal Button Calculate by 'eval()'
        function result(){
            resultDispay.value = eval(resultDispay.value);
        }

        // AC Button Clear everything
        function Clear(){
            resultDispay.value = null;
        }

        // Backspace Button Clear everything
        function backSpace(){
            resultDispay.value = resultDispay.value.slice(0, -1);
        }
