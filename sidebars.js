module.exports = {
  tutorialSidebar:[
    {
      type: 'category',
      label: 'Lab Environment',
      items: ['intro',
              'calm_architecture/calm_architecture',
              'calm_login/calm_login',
      ],
    },
    {
      type: 'category',
      label: 'Project',
      items: ['calm_project/calm_project',
              'calm_project/calm_infrastructure',
              'calm_project/calm_quota',
              'calm_project/calm_environment',
              'calm_project/snapshot_policy_project',                                
            ],
    },
    {
      type: 'category',
      label: 'NCM Self Service',
      items: ['what_is_calm/what_is_calm',
              'what_is_calm/blueprint',
              'what_is_calm/application',
              'what_is_calm/runbook',
              'ncm_marketplace2/ncm_marketplace2',                          
            ],
    },
    {
      type: 'category',
      label: 'Multi-VM Wordpress App',
      items: ['calm_multi_vm/provision_app/provision_app',
              'calm_multi_vm/scaleout_app/scaleout_app',
             ],
    },
  ],
};