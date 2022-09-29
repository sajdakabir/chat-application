const expres=require('express');
const app=expres();
const PORT=3000 || process.env.PORT;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`));