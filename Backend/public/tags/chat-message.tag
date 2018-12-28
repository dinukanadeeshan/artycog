<chat-message>
    <incoming-msg if="{opts.msg.type == 1}"></incoming-msg>
    <outgoing-msg if="{opts.msg.type == 0}"></outgoing-msg>
    <script>
        var self = this;

        show(){
            console.log(self.opts);
        }

        self.on('mount', function() {
            self.show();
        })            
    </script>
</chat-message>