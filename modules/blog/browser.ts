import { Md2jsx } from '../../components/md2jsx'
import cpp from '../../components/md2jsx/languages/cpp'
import hs from '../../components/md2jsx/languages/haskell'
import tsx from '../../components/md2jsx/languages/tsx'
import MD_Theme from '../../components/md2jsx/theme/atom-dark'

Md2jsx.registerLanguage('tsx', tsx)
Md2jsx.registerLanguage('hs', hs)
Md2jsx.registerLanguage('cpp', cpp)

export const md_theme = MD_Theme
export { Md2jsx }
