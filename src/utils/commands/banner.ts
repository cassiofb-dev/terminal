import packageJson from '../../../package.json';

export default () => `
 ██████╗ █████╗ ███████╗███████╗██╗ ██████╗                      
██╔════╝██╔══██╗██╔════╝██╔════╝██║██╔═══██╗                     
██║     ███████║███████╗███████╗██║██║   ██║                     
██║     ██╔══██║╚════██║╚════██║██║██║   ██║                     
╚██████╗██║  ██║███████║███████║██║╚██████╔╝                     
 ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝ ╚═════╝                      
                                                                 
████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝ v${packageJson.version}

Type 'help' to see list of available commands.
`;