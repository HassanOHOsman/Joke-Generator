const jokeBtn = document.createElement("button");
jokeBtn.textContent = "Generate a Joke";
document.body.append(jokeBtn);

jokeBtn.style.width = "130px";
jokeBtn.style.height = "60px";
jokeBtn.style.borderRadius = "10px"
jokeBtn.style.borderStyle = "solid";
jokeBtn.style.borderColor = "#9d0208";
jokeBtn.style.display = "block";
jokeBtn.style.margin = "70px auto";
jokeBtn.style.backgroundColor = "#e36414";
jokeBtn.style.fontWeight = "bold";
jokeBtn.style.fontFamily = "Copperplate, fantasy";
jokeBtn.style.fontSize = "large";


document.body.style.backgroundColor = "#e9d8a6";


const joke = document.createElement("p");
joke.textContent = "";
document.body.append(joke);

joke.style.textAlign = "center";
joke.style.fontFamily = "Copperplate, fantasy";
joke.style.fontSize = "x-large";
joke.style.marginTop = "100px";


const delivery = document.createElement("p");
delivery.textContent = "";
joke.after(delivery);

delivery.style.textAlign = "center";
delivery.style.fontFamily = "Copperplate, fantasy";
delivery.style.fontSize = "x-large";

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


