/*
 * analyzeText: wrapper function to analyze input text using
 *              Google cloud's natrual language processing API.
 *
 * Run this file for a demo.
 *
 * Usage:
 * [
 *    sentiment_result,
 *    entities_result,
 *    syntax_result,
 *    classify_result
 * ] = analyzeText(
 *    text,                   - text to analyze (string)
 *    analyze_sentiment,      - whether to perform sentiment analysis (boolean, default=true)
 *    analyze_entities,       - whether to perform entity analysis (boolean, default=true)
 *    analyze_syntax,         - whether to perform syntax analysis (boolean, default=true)
 *    classify_content,       - whether to perform content classification (boolean, default=true)
 * )
 *
 * Returns:                   note - if analyze_sentiment is false, sentiment_result is null, etc
 * 1. sentiment_result
 *      - an analysis of the prevailing emotional opinion within the text
 *      - extent to which it is positive, negative, or neutral
 *      - an array of objects:
 *        - sentiment_result[0].magnitude = amount of emotional content present
 *                                          (0 = none, >10 = huge amount)
 *        - sentiment_restult[0].score = whether the text is mostly positive, negative, or neutral
 *                                          (-1 = most negative, +1 = most positive)
 *        - sentiment_result[1...] = analysis result for each individual sentence in the text. For example:
 *            - sentiment_result[5].text = text of the 5th sentence
 *            - sentiment_result[5].magnitude = magnitude of the 5th sentence
 *            - sentiment_result[5].score = score of the 5th sentence
 * 2. entities_result
 *      - an analysis of each entity/thing referred to in the text,
 *        and a salience score (relevance to overall text)
 *      - an array of objects:
 *        - entities_result[6].name = name of 7th most relevant entity in the text.
 *        - entities_result[6].type = PERSON/EVENT/NUMBER/etc...
 *        - entities_result[6].salience = salience score
 *                                          (0 = irrelevant to text, 1 = 100% relevant)
 * 3. syntax_result
 *      - a syntactic analysis of the document (nouns/verbs/adjectives, punctuation, etc)
 *      - an array of objects
 *        - syntax_result[0].word = 1st word
 *        - syntax_result[0].partOfSpeech = what part of speech it is
 * 4. classify_result
 *      - still not sure entirely how it works.
 *      - doesn't seem to find anything (returns empty array) for most inputs
 *      - likely only works well if the input text is very long
 *
 * More info: https://cloud.google.com/natural-language/docs/how-to
 */
async function analyzeText(
  text,
  analyze_sentiment = true,
  analyze_entities = true,
  analyze_syntax = true,
  classify_content = false,
) {
  const language = require("@google-cloud/language"); // Imports the Google cloud client library
  const client = new language.LanguageServiceClient(); // Create client
  const document = { content: text, type: "PLAIN_TEXT" }; // Create document representing provided text

  // Detect the sentiment of the document, if requested
  let sentiment_result = null;
  if (analyze_sentiment) {
    [sentiment_result_raw] = await client.analyzeSentiment({ document });
    sentiment_result = [
      {
        magnitude: sentiment_result_raw.documentSentiment.magnitude,
        score: sentiment_result_raw.documentSentiment.score,
      },
    ];
    for (const sentence of sentiment_result_raw.sentences) {
      sentiment_result.push({
        text: sentence.text.content,
        magnitude: sentence.sentiment.magnitude,
        score: sentence.sentiment.score,
      });
    }
  }

  // Detect the entities of the document, if requested
  let entity_result = null;
  if (analyze_entities) {
    [entity_result_raw] = await client.analyzeEntities({ document });
    entity_result = entity_result_raw.entities;
  }

  // Detect the syntax of the document, if requested
  let syntax_result = null;
  if (analyze_syntax) {
    [syntax_result_raw] = await client.analyzeSyntax({ document });
    syntax_result = [];
    for (const token of syntax_result_raw.tokens) {
      syntax_result.push({
        partOfSpeech: token.partOfSpeech.tag,
        word: token.text.content,
      });
    }
  }

  // Classify the content of the document, if requested
  let classify_result = null;
  if (classify_content) {
    [classify_result_raw] = await client.classifyText({ document });
    classify_result = [];
    for (const category of classify_result_raw.categories) {
      classify_result.push({
        name: category.name,
        confidence: category.confidence,
      });
    }
  }

  return [sentiment_result, entity_result, syntax_result, classify_result];
}

text =
  "What the fuck did you just fucking say about me, you little bitch? I'll have you know I\n" +
  "graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on\n" +
  "Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper\n" +
  "in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck\n" +
  "out with precision the likes of which has never been seen before on this Earth, mark my fucking words.\n" +
  "You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we\n" +
  "speak I am contacting my secret network of spies across the USA and your IP is being traced right now\n" +
  "so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call\n" +
  "your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven\n" +
  "hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat,\n" +
  "but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full\n" +
  "extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have\n" +
  'known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you\n' +
  "would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price,\n" +
  "you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.";

console.log(`Original text:\n${text}\n`);

analysis = analyzeText(
    text.replace(/\n/g, ' '),
    true,
    true,
    true,
    true,
).then(
  ([
    sentiment_result,
    entity_result,
    syntax_result,
    classify_result,
  ]) => {
    console.log(`Overall sentiment:
    \tMagnitude: ${sentiment_result[0].magnitude}
    \tScore: ${sentiment_result[0].score}`);
    console.log();
    console.log("Line by line:");
    for (const sentence in sentiment_result) {
      if (sentence > 0) {
        console.log(
          `\tText: ${sentiment_result[sentence].text}`
        );
        console.log(`\tMagnitude: ${sentiment_result[sentence].magnitude}`);
        console.log(`\tScore: ${sentiment_result[sentence].score}`);
        console.log();
      }
    }

    console.log("Entities:");
    for (const entity of entity_result) {
      console.log(`\tName: ${entity.name}, type: ${entity.type}, salience: ${entity.salience}`);
    }
    console.log();

    console.log("Syntax:");
    for (const part of syntax_result) {
      console.log(`Word: ${part.word} (${part.partOfSpeech})`);
    }
    console.log();

    console.log('Categories:');
    for (const category of classify_result) {
        console.log(`\tName: ${category.name} (confidence: ${category.confidence})`);
    }
    console.log();
  }
);
