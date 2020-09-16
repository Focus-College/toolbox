import yargs = require('yargs');
import { displayCandidateName } from './function';

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
        
        displayCandidateName( args.candidate );

    }

);

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();