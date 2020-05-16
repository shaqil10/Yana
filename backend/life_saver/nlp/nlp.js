/*
 * documentation: todo lol oops
 *
 */
async function analyzeText(
    text,
    analyze_sentiment = true,
    analyze_entities = true,
    analyze_syntax = true,
    analyze_entity_sentiment = false,
    classify_content = true,
) {
    const language = require('@google-cloud/language'); // Imports the Google cloud client library
    const client = new language.LanguageServiceClient(); // Create client
    const document = {content: text, type: 'PLAIN_TEXT'}; // Create document representing provided text

    // Detect the sentiment of the document, if requested
    let sentiment_result = null;
    if (analyze_sentiment) {
        [sentiment_result_raw] = await client.analyzeSentiment({document});
        sentiment_result = [{
            magnitude: sentiment_result_raw.documentSentiment.magnitude,
            score: sentiment_result_raw.documentSentiment.score,
        }]
        for (const sentence of sentiment_result_raw.sentences) {
            sentiment_result.push({
                text: sentence.text.content,
                magnitude: sentence.sentiment.magnitude,
                score: sentence.sentiment.score,
            })
        }
    }

    // Detect the entities of the document, if requested
    let entity_result = null;
    if (analyze_entities) {
        [entity_result_raw] = await client.analyzeEntities({document});
        entity_result = entity_result_raw.entities;
    }

    // Detect the syntax of the document, if requested
    let syntax_result = null;
    if (analyze_syntax) {
        [syntax_result_raw] = await client.analyzeSyntax({document});
        // TODO
    }

    // Detect the entity sentiment of the document, if requested
    let entity_sentiment_result = null;
    if (analyze_entity_sentiment) {
        [entity_sentiment_result_raw] = await client.analyzeEntitySentiment({document});
        // TODO
    }

    // Classify the content of the document, if requested
    let classify_result = null;
    if (classify_content) {
        [classify_result_raw] = await client.classifyText({document});
        // TODO
    }

    return [
        sentiment_result,
        entity_result,
        syntax_result,
        entity_sentiment_result,
        classify_result,
    ];
}

text = 'What the fuck did you just fucking say about me, you little bitch? I\'ll have you know I\n' +
    'graduated top of my class in the Navy Seals, and I\'ve been involved in numerous secret raids on\n' +
    'Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I\'m the top sniper\n' +
    'in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck\n' +
    'out with precision the likes of which has never been seen before on this Earth, mark my fucking words.\n' +
    'You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we\n' +
    'speak I am contacting my secret network of spies across the USA and your IP is being traced right now\n' +
    'so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call\n' +
    'your life. You\'re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven\n' +
    'hundred ways, and that\'s just with my bare hands. Not only am I extensively trained in unarmed combat,\n' +
    'but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full\n' +
    'extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have\n' +
    'known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you\n' +
    'would have held your fucking tongue. But you couldn\'t, you didn\'t, and now you\'re paying the price,\n' +
    'you goddamn idiot. I will shit fury all over you and you will drown in it. You\'re fucking dead, kiddo.';

console.log(`Original text:\n${text}\n`)

analysis = analyzeText(
    text,
    true,
).then(([
            sentiment_result,
            entity_result,
            syntax_result,
            entity_sentiment_result,
            classify_result,
        ]) => {
    console.log(`Overall sentiment:
    \tMagnitude: ${sentiment_result[0].magnitude}
    \tScore: ${sentiment_result[0].score}`);
    console.log();
    console.log('Line by line:')
    for (const sentence in sentiment_result) {
        if (sentence > 0) {
            console.log(`\tText: ${sentiment_result[sentence].text.replace('\n', ' ')}`)
            console.log(`\tMagnitude: ${sentiment_result[sentence].magnitude}`)
            console.log(`\tScore: ${sentiment_result[sentence].score}`)
            console.log();
        }
    }

    console.log('Entities:')
    for (const entity of entity_result) {
        console.log(`\tName: ${entity.name.replace('\n', ' ')}`);
        console.log(`\tType: ${entity.type}`);
        console.log(`\tSalience: ${entity.salience}`);
        console.log();
    }
});