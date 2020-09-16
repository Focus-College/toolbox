import yargs = require('yargs');
import { displayCandidateName, denyPersonFromVoting } from './function';
import { applyVotingRules } from './function-vote';
import { findCandidateAndMakeSpeech } from './object-candidate';

yargs.command(

    'vote',

    'Votes for a candidate',

    {

        over18: {
            type: 'boolean',
            alias: 'o',
            description: 'Are you over 18 years old?'
        },

        candidate: {
            type: 'string',
            alias: 'c',
            description: 'The name of the candidate'
        }

    },

    function( args ){
        
        // applyVotingRules( args.candidate, args.over18, displayCandidateName, denyPersonFromVoting );

        const winner = findCandidateAndMakeSpeech( args.candidate );
        winner.victorySpeech();

    }

);

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();