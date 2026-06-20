import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage.jsx';
import { SubHero, SubOverview } from '../components/SubsidiaryParts.jsx';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal.jsx';
import {
  ArrowLeft, ArrowRight,
  CleaningIcon, TrashIcon, DropIcon, BugIcon, LeafIcon,
  ZapIcon, FanIcon, SettingsIcon,
  FlameIcon, ShieldIcon, BuildingIcon,
} from '../components/Icons.jsx';

export default function FM() {
  const { t } = useLanguage();
  const [tab, setTab] = useState('light');

  const lightServices = [
    { Icon: CleaningIcon, t_key: 'fm.svc.cleaning_t', d_key: 'fm.svc.cleaning_d' },
    { Icon: TrashIcon, t_key: 'fm.svc.waste_t', d_key: 'fm.svc.waste_d' },
    { Icon: DropIcon, t_key: 'fm.svc.water_t', d_key: 'fm.svc.water_d' },
    { Icon: BugIcon, t_key: 'fm.svc.pest_t', d_key: 'fm.svc.pest_d' },
    { Icon: LeafIcon, t_key: 'fm.svc.landscape_t', d_key: 'fm.svc.landscape_d' },
  ];

  const maintenanceServices = [
    { Icon: ZapIcon, t_key: 'fm.svc.mechanical_t', d_key: 'fm.svc.mechanical_d' },
    { Icon: FanIcon, t_key: 'fm.svc.electrical_t', d_key: 'fm.svc.electrical_d' },
    { Icon: SettingsIcon, t_key: 'fm.svc.plumbing_t', d_key: 'fm.svc.plumbing_d' },
    { Icon: SettingsIcon, t_key: 'fm.svc.hvac_t', d_key: 'fm.svc.hvac_d' },
    { Icon: SettingsIcon, t_key: 'fm.svc.civil_t', d_key: 'fm.svc.civil_d' },
  ];

  const specializedServices = [
    { Icon: FlameIcon, t_key: 'fm.svc.elevator_t', d_key: 'fm.svc.elevator_d' },
    { Icon: ShieldIcon, t_key: 'fm.svc.security_t', d_key: 'fm.svc.security_d' },
    { Icon: BuildingIcon, t_key: 'fm.svc.fire_t', d_key: 'fm.svc.fire_d' },
    { Icon: BuildingIcon, t_key: 'fm.svc.swimming_t', d_key: 'fm.svc.swimming_d' },
    { Icon: BuildingIcon, t_key: 'fm.svc.manpower_t', d_key: 'fm.svc.manpower_d' },
    { Icon: BuildingIcon, t_key: 'fm.svc.contracts_t', d_key: 'fm.svc.contracts_d' },
    { Icon: BuildingIcon, t_key: 'fm.svc.light_t', d_key: 'fm.svc.light_d' },
    { Icon: BuildingIcon, t_key: 'fm.svc.ups_t', d_key: 'fm.svc.ups_d' },
    { Icon: BuildingIcon, t_key: 'fm.svc.generator_t', d_key: 'fm.svc.generator_d' },
    { Icon: BuildingIcon, t_key: 'fm.svc.reception_t', d_key: 'fm.svc.reception_d' },
            
  ];

  const tabContent = {
    light: lightServices,
    maintenance: maintenanceServices,
    specialized: specializedServices,
  };

  const tabs = [
    { id: 'light', label: t('fm.tab_light') },
    { id: 'maintenance', label: t('fm.tab_maintenance') },
    { id: 'specialized', label: t('fm.tab_specialized') },
  ];

  return (
    <div>
      <SubHero
        eyebrowKey="fm.eyebrow"
        descKey="fm.desc"
        logoSrc="/logos/utility-fm.svg"
        logoAlt="Utility FM"
        images={['/images/fm-1.png', '/images/fm-2.png', '/images/fm-3.png']}
      />

      <SubOverview
        titleKey="fm.overview_title"
        textKey="fm.overview_text"
        bannerImg="/images/fm-banner.png"
      />

      {/* SERVICES */}
      <section className="services-section container">
        <div className="services-layout">
          <Reveal>
            <aside className="services-side">
              <p className="eyebrow">{t('sub.our_services')}</p>
              <div className="services-arrows">
                <button
                  type="button"
                  aria-label="Previous service group"
                  onClick={() => {
                    const idx = tabs.findIndex((tt) => tt.id === tab);
                    setTab(tabs[(idx - 1 + tabs.length) % tabs.length].id);
                  }}
                >
                  <ArrowLeft size={12} />
                </button>
                <button
                  type="button"
                  aria-label="Next service group"
                  onClick={() => {
                    const idx = tabs.findIndex((tt) => tt.id === tab);
                    setTab(tabs[(idx + 1) % tabs.length].id);
                  }}
                >
                  <ArrowRight size={12} />
                </button>
              </div>
              <div className="services-tabs">
                {tabs.map((tt, i) => (
                  <button
                    key={tt.id}
                    className={`services-tab ${tab === tt.id ? 'is-active' : ''}`}
                    onClick={() => setTab(tt.id)}
                  >
                    <span className="services-tab__num">{String(i + 1).padStart(2, '0')}.</span>
                    {tt.label}
                  </button>
                ))}
              </div>
            </aside>
          </Reveal>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <StaggerGroup className="services-grid">
                  {tabContent[tab].map(({ Icon, t_key, d_key }, i) => (
                    <StaggerItem key={t_key} className="service-card">
                      <div className="service-card__icon"><Icon /></div>
                      <p className="service-card__num">{String(i + 1).padStart(2, '0')}.</p>
                      <h4 className="service-card__title">{t(t_key)}</h4>
                      <p className="service-card__desc">{t(d_key)}</p>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
