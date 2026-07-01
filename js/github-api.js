// GitHub API Helper Module
// This file provides a reusable wrapper for GitHub REST API operations

class GitHubAPIHelper {
    constructor(config) {
        this.owner = config.owner;
        this.repo = config.repo;
        this.token = config.token;
        this.apiUrl = 'https://api.github.com';
    }

    /**
     * Get file content from GitHub repository
     * @param {string} path - Path to file in repository
     * @returns {Promise<{content: any, sha: string}>}
     */
    async getFile(path) {
        try {
            const response = await fetch(`${this.apiUrl}/repos/${this.owner}/${this.repo}/contents/${path}`, {
                headers: {
                    'Authorization': `token ${this.token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return {
                content: JSON.parse(atob(data.content)),
                sha: data.sha
            };
        } catch (error) {
            console.error('Error fetching file:', error);
            throw error;
        }
    }

    /**
     * Update or create file in GitHub repository
     * @param {string} path - Path to file in repository
     * @param {any} content - Content to write (will be JSON stringified)
     * @param {string} sha - Current file SHA (required for updates)
     * @param {string} message - Commit message
     * @returns {Promise<boolean>}
     */
    async updateFile(path, content, sha, message) {
        try {
            const response = await fetch(`${this.apiUrl}/repos/${this.owner}/${this.repo}/contents/${path}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${this.token}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: message,
                    content: btoa(JSON.stringify(content, null, 2)),
                    sha: sha
                })
            });

            return response.ok;
        } catch (error) {
            console.error('Error updating file:', error);
            return false;
        }
    }

    /**
     * Delete file from GitHub repository
     * @param {string} path - Path to file in repository
     * @param {string} sha - Current file SHA
     * @param {string} message - Commit message
     * @returns {Promise<boolean>}
     */
    async deleteFile(path, sha, message) {
        try {
            const response = await fetch(`${this.apiUrl}/repos/${this.owner}/${this.repo}/contents/${path}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `token ${this.token}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: message,
                    sha: sha
                })
            });

            return response.ok;
        } catch (error) {
            console.error('Error deleting file:', error);
            return false;
        }
    }

    /**
     * Get repository info
     * @returns {Promise<any>}
     */
    async getRepoInfo() {
        try {
            const response = await fetch(`${this.apiUrl}/repos/${this.owner}/${this.repo}`, {
                headers: {
                    'Authorization': `token ${this.token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error getting repo info:', error);
            throw error;
        }
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GitHubAPIHelper;
}