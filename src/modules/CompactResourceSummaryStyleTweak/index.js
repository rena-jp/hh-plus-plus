import STModule from '../STModule'
import Helpers from '../../common/Helpers'
import I18n from '../../i18n'

import styles from './styles.lazy.scss'

const MODULE_KEY = 'compactResourceSummary'

class CompactResourceSummaryStyleTweak extends STModule {
    constructor () {
        const configSchema = ({
            baseKey: MODULE_KEY,
            label: I18n.getModuleLabel('stConfig', MODULE_KEY),
            default: true
        })
        super({
            configSchema,
            styles
        })
    }

    shouldRun () {
        return true
    }

    run (props) {
        super.run(props)

        Helpers.defer(() => {
            Helpers.onAjaxResponse(/action=hero_get_resources/, (response) => {
                const observer = new MutationObserver(() => {
                    if ($('#hero_resources_popup').length) {

                        Object.entries(response.currencies).forEach(([currency, amount]) => {
                            switch (currency) {
                            case 'soft_currency':
                                $('.hero-currency:has(.hudSC_mix_icn)>p').text(`x${+amount >= 1e6 ? I18n.nRounding(+amount, 3, 0) : I18n.nThousand(+amount)}`)
                                    .attr('hh_title', I18n.nThousand(+amount)).attr('tooltip', '')
                                break
                            case 'hard_currency':
                                $('.hero-currency:has(.hudHC_mix_icn)>p').text(`x${I18n.nThousand(+amount)}`)
                                break
                            case 'seasonal_event_cash':
                                $('.hero-currency:has(.mega_event_cash_icn)>p').text(`x${I18n.nThousand(+amount)}`)
                                break
                            case 'laby_coin':
                                $('.hero-currency:has(.labyrinth_coin_icn)>p').text(`x${I18n.nThousand(+amount)}`)
                                break
                            default:
                                $(`.hero-currency:has(.${currency}_icn)>p`).text(`x${I18n.nThousand(+amount)}`)
                            }
                        })

                        Object.values(response.gems).forEach((gem, index) => {
                            $('.hero-gem>p').eq(index).text(`x${I18n.nThousand(+gem.amount)}`)
                        })

                        Object.values(response.orbs).forEach((orb, index) => {
                            $('.hero-orb>p').eq(index).text(`x${I18n.nThousand(+orb)}`)
                        })

                        Object.values(response.progressions).forEach((progression, index) => {
                            $('.hero-progression>p').eq(index).text(`x${I18n.nThousand(+progression)}`)
                        })

                        observer.disconnect()
                    }
                })
                observer.observe($('#popups')[0], {childList: true})
            })
        })
    }
}

export default CompactResourceSummaryStyleTweak
