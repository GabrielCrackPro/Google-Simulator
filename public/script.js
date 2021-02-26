//Search
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    const formData = new FormData(form)
    const query = formData.get('query')
    window.open(`https://www.google.com/search?q=${query}`)
    event.preventDefault()
    form.reset()
})