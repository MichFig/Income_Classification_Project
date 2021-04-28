










tf.loadLayersModel('static/jsmodel/model.json').then(model=>{

var example = tf.tensor2d([17,1,0,0,0,0,0,1,0],[1,9]);

console.log(model.predict(example).dataSync());

});