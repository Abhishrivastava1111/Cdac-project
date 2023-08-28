
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 08/29/2023 00:41:27
-- Generated from EDMX file: C:\Users\DELL\OneDrive\Desktop\New folder\Cdac-project\Backend\Helpers_planet\Models\Model1.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [Cdac_project];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK__campaign___campa__5DCAEF64]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[campaign_details] DROP CONSTRAINT [FK__campaign___campa__5DCAEF64];
GO
IF OBJECT_ID(N'[dbo].[FK__campaign___user___5CD6CB2B]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[campaign_details] DROP CONSTRAINT [FK__campaign___user___5CD6CB2B];
GO
IF OBJECT_ID(N'[dbo].[FK__contribut__user___3C69FB99]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[contribution] DROP CONSTRAINT [FK__contribut__user___3C69FB99];
GO
IF OBJECT_ID(N'[dbo].[FK__role__role_id__2645B050]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[role] DROP CONSTRAINT [FK__role__role_id__2645B050];
GO
IF OBJECT_ID(N'[dbo].[FK__role__user_id__25518C17]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[role] DROP CONSTRAINT [FK__role__user_id__25518C17];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[campaign]', 'U') IS NOT NULL
    DROP TABLE [dbo].[campaign];
GO
IF OBJECT_ID(N'[dbo].[campaign_details]', 'U') IS NOT NULL
    DROP TABLE [dbo].[campaign_details];
GO
IF OBJECT_ID(N'[dbo].[contribution]', 'U') IS NOT NULL
    DROP TABLE [dbo].[contribution];
GO
IF OBJECT_ID(N'[dbo].[role]', 'U') IS NOT NULL
    DROP TABLE [dbo].[role];
GO
IF OBJECT_ID(N'[dbo].[role_names]', 'U') IS NOT NULL
    DROP TABLE [dbo].[role_names];
GO
IF OBJECT_ID(N'[dbo].[users]', 'U') IS NOT NULL
    DROP TABLE [dbo].[users];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'campaigns'
CREATE TABLE [dbo].[campaigns] (
    [campaign_id] int IDENTITY(1,1) NOT NULL,
    [title] varchar(300)  NULL,
    [type] varchar(200)  NULL,
    [goal] varchar(300)  NULL,
    [description] varchar(1000)  NULL,
    [start_date] datetime  NULL,
    [end_date] datetime  NULL,
    [status] int  NULL,
    [imageloc] nchar(500)  NULL,
    [requiredAmount] int  NULL
);
GO

-- Creating table 'campaign_details'
CREATE TABLE [dbo].[campaign_details] (
    [Id] int  NOT NULL,
    [user_id] int  NULL,
    [campaign_id] int  NULL
);
GO

-- Creating table 'contributions'
CREATE TABLE [dbo].[contributions] (
    [contribution_id] int IDENTITY(1,1) NOT NULL,
    [user_id] int  NULL,
    [contribution1] decimal(10,2)  NULL,
    [vision] varchar(100)  NULL,
    [date] datetime  NULL,
    [campaign_id] int  NULL
);
GO

-- Creating table 'roles'
CREATE TABLE [dbo].[roles] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [user_id] int  NULL,
    [role_id] int  NULL
);
GO

-- Creating table 'role_names'
CREATE TABLE [dbo].[role_names] (
    [role_id] int IDENTITY(1,1) NOT NULL,
    [role_name] varchar(20)  NULL
);
GO

-- Creating table 'users'
CREATE TABLE [dbo].[users] (
    [user_id] int IDENTITY(1,1) NOT NULL,
    [name] varchar(30)  NULL,
    [address] varchar(100)  NULL,
    [mobile] varchar(15)  NULL,
    [email] varchar(50)  NULL,
    [password] varchar(30)  NULL,
    [pan] varchar(20)  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [campaign_id] in table 'campaigns'
ALTER TABLE [dbo].[campaigns]
ADD CONSTRAINT [PK_campaigns]
    PRIMARY KEY CLUSTERED ([campaign_id] ASC);
GO

-- Creating primary key on [Id] in table 'campaign_details'
ALTER TABLE [dbo].[campaign_details]
ADD CONSTRAINT [PK_campaign_details]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [contribution_id] in table 'contributions'
ALTER TABLE [dbo].[contributions]
ADD CONSTRAINT [PK_contributions]
    PRIMARY KEY CLUSTERED ([contribution_id] ASC);
GO

-- Creating primary key on [Id] in table 'roles'
ALTER TABLE [dbo].[roles]
ADD CONSTRAINT [PK_roles]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [role_id] in table 'role_names'
ALTER TABLE [dbo].[role_names]
ADD CONSTRAINT [PK_role_names]
    PRIMARY KEY CLUSTERED ([role_id] ASC);
GO

-- Creating primary key on [user_id] in table 'users'
ALTER TABLE [dbo].[users]
ADD CONSTRAINT [PK_users]
    PRIMARY KEY CLUSTERED ([user_id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [campaign_id] in table 'campaign_details'
ALTER TABLE [dbo].[campaign_details]
ADD CONSTRAINT [FK__campaign___campa__5DCAEF64]
    FOREIGN KEY ([campaign_id])
    REFERENCES [dbo].[campaigns]
        ([campaign_id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK__campaign___campa__5DCAEF64'
CREATE INDEX [IX_FK__campaign___campa__5DCAEF64]
ON [dbo].[campaign_details]
    ([campaign_id]);
GO

-- Creating foreign key on [user_id] in table 'campaign_details'
ALTER TABLE [dbo].[campaign_details]
ADD CONSTRAINT [FK__campaign___user___5CD6CB2B]
    FOREIGN KEY ([user_id])
    REFERENCES [dbo].[users]
        ([user_id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK__campaign___user___5CD6CB2B'
CREATE INDEX [IX_FK__campaign___user___5CD6CB2B]
ON [dbo].[campaign_details]
    ([user_id]);
GO

-- Creating foreign key on [user_id] in table 'contributions'
ALTER TABLE [dbo].[contributions]
ADD CONSTRAINT [FK__contribut__user___3C69FB99]
    FOREIGN KEY ([user_id])
    REFERENCES [dbo].[users]
        ([user_id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK__contribut__user___3C69FB99'
CREATE INDEX [IX_FK__contribut__user___3C69FB99]
ON [dbo].[contributions]
    ([user_id]);
GO

-- Creating foreign key on [role_id] in table 'roles'
ALTER TABLE [dbo].[roles]
ADD CONSTRAINT [FK__role__role_id__2645B050]
    FOREIGN KEY ([role_id])
    REFERENCES [dbo].[role_names]
        ([role_id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK__role__role_id__2645B050'
CREATE INDEX [IX_FK__role__role_id__2645B050]
ON [dbo].[roles]
    ([role_id]);
GO

-- Creating foreign key on [user_id] in table 'roles'
ALTER TABLE [dbo].[roles]
ADD CONSTRAINT [FK__role__user_id__25518C17]
    FOREIGN KEY ([user_id])
    REFERENCES [dbo].[users]
        ([user_id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK__role__user_id__25518C17'
CREATE INDEX [IX_FK__role__user_id__25518C17]
ON [dbo].[roles]
    ([user_id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------