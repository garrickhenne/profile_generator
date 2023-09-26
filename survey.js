const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!
let profile = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  profile.nickName = answer;

  rl.question("What's an activity you like doing? ", (answer) => {
    profile.favActivity = answer;

    rl.question("What do you listen to while doing that? ", (answer) => {
      profile.music = answer;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        profile.favMeal = answer;

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          profile.favFood = answer;

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            profile.sport = answer;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              profile.superpower = answer;
              console.log();
              console.log('Thanks for your input! Heres your personalized bio!');
              console.log(printProfile(profile));
              rl.close();
            });
          });
        });
      });

    });
  });
});

const printProfile = (profile) => {
  const { nickName, favActivity, music, favMeal, favFood, sport, superpower } = profile;

  return `Hey! You can call me ${nickName}! In my spare time I like to ${favActivity} while listening to ${music}! 
  Invite me to ${favMeal} and I'll go crazy for ${favFood} 🥳. 
  If youre a big fan of ${sport} like me then I think we'd get along! I specialize in ${superpower}! Reach out anytime!`;
};

