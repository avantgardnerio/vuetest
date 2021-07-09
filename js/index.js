import People from 'people'
            
let app;
onload = () => {
    const div = document.createElement(`div`);
    document.body.appendChild(div);
    app = new Vue({
        el: div,
        components: { People },
        template: `<People/>`,
        vuetify: new Vuetify(),
    })
}
