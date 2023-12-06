const customName = document.getElementById('customName');
const randomize = document.getElementById('randomize');
const story = document.getElementById('story');

const nouns = ['rabbit', 'elephant', 'tortoise', 'crow', 'frog'];
const verbs = ['ran', 'walked', 'walked', 'flew', 'jumped'];
const adjectives = ['poor', 'happy', 'thirsty', 'gloomy', 'funny'];
const adverbs = ['quickly', 'slowly', 'carefully', 'happily', 'quietly'];

randomize.addEventListener('click', () => {
    const name = customName.value || 'You';
    const noun = randomValueFromArray(nouns);
    const verb = randomValueFromArray(verbs);
    const adjective = randomValueFromArray(adjectives);
    const adverb = randomValueFromArray(adverbs);

    story.innerHTML = `Once upon a time, there was a ${adjective} ${noun} named ${name}. One day, ${name} ${adverb} ${verb} to the forest. At the forest, ${name} saw a group of puppies quarrelling. ${name} stopped them from quarelling and told them to live happilyy and then they played together.`;
});

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}