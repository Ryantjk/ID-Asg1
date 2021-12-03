const name = document.getElementById('Name')
const name = document.getElementById('email')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => 
{let messages = []
if (Name.value === '' || Name.value == null)
{messages.push('Name is required')
}

if (Name.value === '' || Name.value == null)
{messages.push('Email is required')}

if(email.value.length <= 10)
{messages.push('please enter a valid email')}
})

