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
      label: 'NCM Marketplace',
      items: ['ncm_marketplace2/ncm_marketplace2',  
              'ncm_marketplace2/ncm_publish_blueprint',
              'ncm_marketplace2/ncm_consume_wordpress',
              'ncm_marketplace2/ncm_publish_iaas_blueprint',
              'ncm_marketplace2/ncm_consume_iaas_rhel'                          
            ],
    },
    {
      type: 'category',
      label: 'NCM Self Service',
      items: ['what_is_calm/what_is_calm',
              'what_is_calm/blueprint',
              'what_is_calm/application',
              'what_is_calm/runbook',                                      
            ],
    },
    {
      type: 'category',
      label: 'NCM Tenant Blueprint',
      items: ['ncm_wordpress/ncm_wordpress',  
             ],
    },
    
    
  ],
};