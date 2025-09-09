const jokeBtn = document.createElement("button");
jokeBtn.textContent = "Generate a Joke";
document.body.append(jokeBtn);

const joke = document.createElement("p");
joke.textContent = "";
document.body.append(joke);

const delivery = document.createElement("p");
delivery.textContent = "";
joke.after(delivery);

async function jokeGenerator() {
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Programming");
        if (!response.ok) {
            throw new Error (`HTTP Error! ${response.status}`);
        }
        const data = await response.json();


        if (data.type === "single") {
            joke.textContent = data.joke;
            delivery.textContent = "";
            
        } else {
            joke.textContent = data.setup
            delivery.textContent = "";

            setTimeout(()=> {
                delivery.textContent = data.delivery;
            }, 5000);
        }

    } catch(error) {
        throw new Error(` Network issue: ${error}`);
    }
}

jokeBtn.addEventListener("click", jokeGenerator);


